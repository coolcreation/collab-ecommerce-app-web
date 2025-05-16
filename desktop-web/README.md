### Desktop / Web browser will use React & run on Vite  
---  
Vite is a build tool designed for faster and more efficient frontend development. It leverages native ES Modules (ESM) in browsers for a lightning-fast development server and uses Rollup for optimized production builds. Essentially, Vite simplifies the development process by providing a zero-configuration setup, blazing-fast development server, and optimized production builds.  
https://vite.dev/guide/

cd into `desktop-web` folder then:
```
npm create vite@latest .
```
install npm and node modules:
```
npm install
npm run dev
```


### Hosting React with Vercel  
---  
1. Log in to Vercel:
   - Go to https://vercel.com/ and log in or make account

2. Add New Project:
   - On Vercel dashboard click the `Add New` dropdown button and select **Project**
  
3. Connect Repository:
   - Under Import Git Repository, search for the repo you weant to add
   - If you find the desired repo click `Import` button
   - You may have to follow the prompts to add Vercel to your Github permissions
  
4. Configure the project settings:
   - `Project Name:` collab-ecommerce-app-web
   - `Framework Preset:` Vite  (for our current project)
   - `Root Directory: ` desktop-web (we are targeting just desktop folder, not mobile)
 
5. Build and Output Settings:
   - `BNuild Command:` vite build
   - `Output Directory:` dist
   - `Install Command:` leave it default, or `npm install` 

6. Environment Variables:  
   - `Key:` VITE_API_BASE_URL
   - `Value:` https://collab-ecommerce-api.onrender.com  (Render API)  

7. Click Deploy Button
   
 