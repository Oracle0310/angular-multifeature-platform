
Param(
    $environmentValue,
    $version,
    [int]$port)

$sourceCodePath = "C:\Projects\AngularContextBoundriesSeparation\instances\navigator\*"
$workingDirectory = "C:\Projects\AngularContextBoundriesSeparation\instances\deployments"
$deploymentVersion = $version

cd $workingDirectory

$releaseName = "$environmentValue-$deploymentVersion"
mkdir $releaseName
cd $releaseName

#Copy files
Copy-Item $sourceCodePath "."

#Copy directories
$excludes = "node_modules"
Get-ChildItem $sourceCodePath -Directory | 
    Where-Object{$_.Name -notin $excludes} | 
    Copy-Item -Destination $dirName -Recurse -Force

Remove-Item "package-lock.json" #Not sure about it? Maybe should be environment dependent
Remove-Item "node_modules"


$environmentPackageJson = Get-Content "package.$environmentValue.json" | ConvertFrom-Json
$packageJson = Get-Content "package.json" | ConvertFrom-Json

function merge ($target, $source) {
    $source.psobject.Properties | % {
        if ($_.TypeNameOfValue -eq 'System.Management.Automation.PSCustomObject' -and $target."$($_.Name)" ) {
            merge $target."$($_.Name)" $_.Value
        }
        else {
            $target | Add-Member -MemberType $_.MemberType -Name $_.Name -Value $_.Value -Force
        }
    }
}

merge $packageJson $environmentPackageJson

$newPackageJsonContent = $packageJson | ConvertTo-Json

Set-Content "package.json" $newPackageJsonContent 
Remove-Item "package.*.json"
"Installing..."
npm install
"Building..."
npm run build:$environmentValue

cd "dist"
cd "navigator"

ng serve --port $port --configuration=$environmentValue


