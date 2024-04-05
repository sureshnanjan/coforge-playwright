param($orig="C93AEDDA66BF6631A21DF9FA2D042437FF8CAD7EBAF226E86639C32BEDF0C786",
$file = (Join-Path -Path test -ChildPath evaluations.spec.ts)
)
$current = Get-FileHash -Path $file | Select-Object -Property Hash
if ($current -match $orig) {
    Write-Host $current
    Write-Host "Test File OK"
}
else {
    Write-Error $orig
    Write-Error $current
}