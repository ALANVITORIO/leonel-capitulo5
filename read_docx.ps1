$path = Join-Path $PSScriptRoot "Design_Patterns_SOF_MPO.docx"
$zip = [System.IO.Compression.ZipFile]::OpenRead($path)
$entry = $zip.Entries | Where-Object { $_.FullName -like "*document.xml" } | Select-Object -First 1
$reader = New-Object System.IO.StreamReader($entry.Open())
$xml = $reader.ReadToEnd()
$reader.Close()
$zip.Dispose()
$text = $xml -replace '<[^>]+>', '' -replace '&amp;', '&' -replace '&lt;', '<' -replace '&gt;', '>' -replace '\s+', ' '
$text | Out-File -Encoding utf8 (Join-Path $PSScriptRoot "Design_Patterns_SOF_MPO.txt")
Write-Output "OK"
