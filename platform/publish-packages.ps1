$path = "C:\Projects\AngularContextBoundriesSeparation\platform\projects"
cd $path
$featuresToBuild = ls

$featuresToBuild = $featuresToBuild | where-object Name -ne '@platform'

foreach($feature in $featuresToBuild){
    "[$feature] Building..."

    cd $feature.FullName
    ng build $feature.Name
}

cd ..
cd ..
cd ./dist
$featuresToPublish = ls
foreach($feature in $featuresToPublish){
    
    cd $feature.FullName

    $packageFullName = $feature.Name
    "[$packageFullName] Checking..."
    $existingPackage = npm view $packageFullName
    $textFromPackageName = $existingPackage[5]
    $existingPackageVersion = $textFromPackageName.Substring($textFromPackageName.IndexOf("$packageFullName-") + $packageFullName.Length + 1, 5)

    $packageFile = Get-Content package.json | ConvertFrom-Json
    $requestedVersion = $packageFile.version
    
    if($requestedVersion -eq $existingPackageVersion.Trim()){
        "[$packageFullName]Skipping package publish. Actual version: $existingPackageVersion"
        continue;
    }

    "[$packageFullName] Publishing..."

    npm publish

    cd ..
}