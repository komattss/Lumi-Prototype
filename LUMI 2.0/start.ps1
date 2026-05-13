# Quick Start Script for LUMI 2.0
# Run this script to start development

Write-Host "================================" -ForegroundColor Cyan
Write-Host "   LUMI 2.0 - Story Experience" -ForegroundColor White
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
$nodeVersion = node --version 2>$null

if ($null -eq $nodeVersion) {
    Write-Host "❌ Node.js is not installed!" -ForegroundColor Red
    Write-Host "   Download from: https://nodejs.org/" -ForegroundColor White
    Write-Host ""
    pause
    exit
}

Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
Write-Host ""

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    Write-Host "   This may take a few minutes..." -ForegroundColor White
    Write-Host ""
    npm install
    Write-Host ""
    Write-Host "✅ Dependencies installed!" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "✅ Dependencies already installed" -ForegroundColor Green
    Write-Host ""
}

# Start the development server
Write-Host "🚀 Starting LUMI development server..." -ForegroundColor Cyan
Write-Host ""
Write-Host "   Local:   http://localhost:3000" -ForegroundColor White
Write-Host "   Network: http://[your-ip]:3000" -ForegroundColor White
Write-Host ""
Write-Host "   Press Ctrl+C to stop" -ForegroundColor Gray
Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Run the dev server
npm run dev
