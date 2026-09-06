# Download all Figma image assets locally
$base = "http://localhost:3845/assets"
$imgDir = "src\assets\images"
$svgDir = "src\assets\icons"
$graphicsDir = "src\assets\graphics"

New-Item -ItemType Directory -Force -Path $imgDir | Out-Null
New-Item -ItemType Directory -Force -Path $svgDir | Out-Null
New-Item -ItemType Directory -Force -Path $graphicsDir | Out-Null

# Product images (PNG)
$images = @{
  "hero-bg.png"         = "92fa8d17f9a93220f4afc2490f5d8f96a4e118d5.png"
  "hero-truck-globe.png"= "5cd9beb79645d6729b14c983f37192e6888655c1.png"
  "ginger.png"          = "256614e946c2ec9e924e75968cd18a60629f1cad.png"
  "cocoa.png"           = "5d35d8d4dcee7ed2423fb5f6a839ea0d14081f76.png"
  "sesame-seeds.png"    = "0809f3900850c8cfe9c52a3fc7d71f768e9597c8.png"
  "garlic.png"          = "3d565be1dbcd3bef46daf9539d9f33718b8e3ec7.png"
  "hibiscus.png"        = "bb38e83a6a8448b6f8b09b56110bd0af9de69f76.png"
  "shea-butter.png"     = "a67dbb49f537135ebad6e43fae22413a1bd4bf82.png"
  "copper.png"          = "7f92065f17f1c928a9c47fa22a5f6926080e6303.png"
  "gum-arabic.png"      = "9e1dd30864e0dba32c28536816864a13f84bde53.png"
  "raw-cashew-nut.png"  = "11d8642ac8a4d6db2a3a0850d422802e5487ea29.png"
  "iron-ore.png"        = "f08219e1c284ca633f19760d4662a5b2691c9d7c.png"
  "magnisium-ore.png"   = "5c391661351bbf423699abb07c2ceda44bc5604e.png"
  "charcoal.png"        = "cb7a9bd9ed80f64b95f1d65684f51ea0425ed09a.png"
}

foreach ($name in $images.Keys) {
  $hash = $images[$name]
  $url = "$base/$hash"
  $dest = "$imgDir\$name"
  Write-Host "Downloading $name..."
  Invoke-WebRequest -Uri $url -OutFile $dest -ErrorAction SilentlyContinue
}

# SVG icons
$icons = @{
  "logo.svg"             = "beeeabf37a32811c3091f9bff0d87f81565172a4.svg"
  "whatsapp-navbar.svg"  = "eecf671bb2532761dc94ab78131c874520326e50.svg"
  "phone-navbar.svg"     = "b8021477460a1369b5dff958786eceec7bd6bf77.svg"
  "mail-navbar.svg"      = "af2941682805e80f6b533d9472737ab81b631b34.svg"
  "location-navbar.svg"  = "27b43f455924f8be360c2077fa94db20607ec85b.svg"
  "leaf-ornament-dark.svg" = "ad8a9bd414cb5418bdfb3698335638cc2be4b1d1.svg"
  "leaf-ornament-light.svg"= "7cca96a1fad095941e1c8f8ada6c881b00690e75.svg"
  "product-mask.svg"     = "a5e4053ff3f887591d01b078fb76d33a935f4719.svg"
  "dot.svg"              = "9559427a1fd8d9923901d8a0db12d5930428a295.svg"
  "arrow.svg"            = "24d266c54c7ede1d5ff51969ce22255ef108f534.svg"
  "icon-receive-quote.svg"   = "cd7b55998464d565a05792dcd7ef9a199e7a1751.svg"
  "icon-source-product.svg"  = "73fa887634ce0c4071b4ee15dc821b8fd0290e1a.svg"
  "icon-warehouse.svg"       = "c34976481ff110a4d38eb6a0fb211ddf2c1146d6.svg"
  "icon-shipping.svg"        = "75041f2179c20d5320ab6dbef2134e4de868aa1e.svg"
  "icon-globe.svg"           = "402269bd546d5b585ba57b594e76e55d884073d2.svg"
  "icon-diamond.svg"         = "c2764080a87a3459417662fd558620d9b39dae65.svg"
  "icon-support.svg"         = "4baaf9a47da97cd78f02ff64a98d6ae078f836cf.svg"
  "icon-price-check.svg"     = "8c21e3d3a1b975cbcd340957937e23ddf6aaa4b5.svg"
  "icon-box.svg"             = "540eb156188309df412e8ced09cf019b0a60e6bf.svg"
  "footer-logo.svg"          = "4b578911d805edf6292ec327aa095bc5e6d45288.svg"
  "nav-icon-home.svg"        = "a61e7c96ad0e010370df721579fb749fca657cce.svg"
  "nav-icon-products.svg"    = "6f780cd62778503c05b3e9860df91b24e3f42eec.svg"
  "nav-icon-about-1.svg"     = "1072aad9fa6dbaf5b98bda64cdd0f81b85a4c1d5.svg"
  "nav-icon-about-2.svg"     = "0cd7508ec249e8bb5d282531deb90eccc9c41a2a.svg"
  "nav-icon-about-3.svg"     = "23f815907dcf7ce91df2ae7de30a35d8d278597a.svg"
  "nav-icon-contact.svg"     = "7a87b6f32d51dacfd613c9de169c46fb87bd982c.svg"
  "whatsapp-footer.svg"      = "1c223bc6576a0e80e331668276a16d429ce2315a.svg"
  "phone-footer.svg"         = "7c38c3567f23bc90876f38b4c8625174e2b4ee1f.svg"
  "mail-footer.svg"          = "ad603d167ddf370a654dfaff7dd053eeb7614374.svg"
  "location-footer.svg"      = "70d903baacde7fd93a72f631b853f18f23ed2ad2.svg"
}

foreach ($name in $icons.Keys) {
  $hash = $icons[$name]
  $url = "$base/$hash"
  $dest = "$svgDir\$name"
  Write-Host "Downloading $name..."
  Invoke-WebRequest -Uri $url -OutFile $dest -ErrorAction SilentlyContinue
}

Write-Host "All assets downloaded successfully!"
