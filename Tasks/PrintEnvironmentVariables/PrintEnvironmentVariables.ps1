Write-Host 'Printing all environment variables...'
Get-ChildItem Env: | % { Write-Host("{0}: {1}" -f $_.Name, $_.Value) }
Write-Host 'All environment variables printed!'





