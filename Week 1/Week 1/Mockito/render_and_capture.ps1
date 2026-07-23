Set-Location -LiteralPath 'd:\java_fse_deepskill\Week 1\Week 1\Mockito'
if (-Not (Test-Path out)) { New-Item -ItemType Directory out | Out-Null }
javac -cp 'lib/*' -d out MyService.java ExternalApi.java MyServiceTest.java
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
$out = java -cp 'out;lib/*' org.junit.runner.JUnitCore org.example.MyServiceTest 2>&1 | Out-String
$out | Tee-Object -FilePath 'terminal_output.txt'
Add-Type -AssemblyName System.Drawing
$text = Get-Content 'terminal_output.txt' -Raw
$font = New-Object System.Drawing.Font('Consolas',11)
$bmpTemp = New-Object System.Drawing.Bitmap(1,1)
$gTemp = [System.Drawing.Graphics]::FromImage($bmpTemp)
$size = $gTemp.MeasureString($text,$font)
$gTemp.Dispose()
$width = [int]([math]::Max([math]::Ceiling($size.Width)+20,400))
$height = [int]([math]::Ceiling($size.Height)+20)
$bmp = New-Object System.Drawing.Bitmap($width,$height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::White)
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
$g.DrawString($text,$font,[System.Drawing.Brushes]::Black,10,10)
$g.Dispose()
$bmp.Save('terminal_output.png',[System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output $out
