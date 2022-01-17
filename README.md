# Metadata scripts for RIT

A scripts for generate metadata and rebuild animated parts.
Fixed by forking the hashlips art engine.

If you don't have animated parts, it's best to refer to the original project.
[ℹ️ Hashlips Website](https://hashlips.online/HashLips)

#### Install
```sh
npm install
```

#### Build Metadata and Fixed PFP
```sh
npm run build
```

#### Rebuild for Animated parts
* Animation rebuild script is 'example' that magick+hashlips art engine is utilized in Windows environment.
* For Linux-based system or other projects, refer to the comments in the script and set them differently.
```sh
npm run animate
```