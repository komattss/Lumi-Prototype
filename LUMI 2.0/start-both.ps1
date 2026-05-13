C:\PROJECT\LUMI# Script untuk menjalankan LUMI Parallax dan Mini Superapps bersamaan
# Run this script with: .\start-both.ps1

Write-Host "================================" -ForegroundColor Cyan
Write-Host "   Starting LUMI Ecosystem" -ForegroundColor White
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Path ke folder superapps (sesuaikan jika berbeda)
$superappPath = "C:\PROJECT\LUMI"

# Cek apakah folder superapps ada
if (Test-Path $superappPath) {
    Write-Host "Found Superapps at: $superappPath" -ForegroundColor Green
} else {
    Write-Host "Superapps folder not found at: $superappPath" -ForegroundColor Red
    Write-Host "Please update the path in start-both.ps1" -ForegroundColor Yellow
    Write-Host ""
    pause
    exit
}

Write-Host ""
Write-Host "Starting services..." -ForegroundColor Yellow
Write-Host ""

# Start Superapps di terminal baru (port 3000)
Write-Host "Starting Mini Superapps (localhost:3000)..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$superappPath'; Write-Host 'Mini Superapps - Port 3000' -ForegroundColor Green; npm run dev"

# Wait sedikit
Start-Sleep -Seconds 2

# Start LUMI Parallax di terminal baru (port 3001)
Write-Host "Starting LUMI Parallax (localhost:3001)..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'C:\PROJECT\LUMI 2.0'; Write-Host 'LUMI Parallax - Port 3001' -ForegroundColor Magenta; npm run dev"

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Both services started!" -ForegroundColor Green
Write-Host ""
Write-Host "Mini Superapps:" -ForegroundColor White
Write-Host "   http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "LUMI Parallax:" -ForegroundColor White
Write-Host "   http://localhost:3001" -ForegroundColor Magenta
Write-Host ""
Write-Host "Klik Begin Your Journey di parallax untuk" -ForegroundColor Yellow
Write-Host "otomatis pindah ke Mini Superapps!" -ForegroundColor Yellow
Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to close this window..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
