# Mission Ready HQ Colab

### Intended Outcome & Project Requirements
The intended outcome of this application is to bridge the collaboration gap between the trainers and candidates. The requirements for this project are to streamline the processes from publishing / submitting each mission and providing feedback to the candidates and vice versa. Spreadsheets have been the age-old method of marking candidate submissions which have worked ok but are not ideal for many reasons addressed by the requirements of this project. 

The core requirements for this  project include
- Publishing missions 
- Tracking candidate progress 
- Provide a feedback channel 
- Perform project matching
- Integration with the attendance platform
- Provide push notifications. 

The technical goals for this project are to create a low latency, reliable and secure service.

## Usage

### Firebase 
1. Create a .env file with the following variable names

![image](https://user-images.githubusercontent.com/53203863/207180620-7e5e53e0-f0e5-40b0-bc8d-ea55a4e19c3d.png)

2. Go to the projects Firebase dashboard and find "Project settings"

![image](https://user-images.githubusercontent.com/53203863/207181173-dd1b082c-883d-4a89-9f4f-e729922c0aac.png)

3. At the bottom of the project settings page you will find "SDK setup and configuration". 

![image](https://user-images.githubusercontent.com/53203863/207182417-6743941d-5195-4540-a984-fdeba84c713c.png)

4. Copy across the values you can see for apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId and place them inside of the .env file you created.

5. For the Tenant ID vist the Azure Active Directory Portal and sign in with your Mission Ready e-mail.

![image](https://user-images.githubusercontent.com/53203863/207184350-3d16cc87-2fcb-4219-b6e7-847535af1b47.png)

6. After signing in, at the Azure Active Directory dashboard find "App registrations" under "Manage" on the left sidebar. 

![image](https://user-images.githubusercontent.com/53203863/207184818-f053f440-a197-4e30-9319-62dea06dcb1d.png)

7. Under the "All applications" tab search for "MRColab" then click on the appliction that is found.

![image](https://user-images.githubusercontent.com/53203863/207185418-8e56d364-e550-4e44-a60a-3ba566cef78b.png)

8. For the final step, in the overview tab find the "Directory (tenant) ID" and copy across the value you see to the .env file you created earlier.  



