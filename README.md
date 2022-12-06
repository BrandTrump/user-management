# Mission Ready HQ Colab

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

### Firebase Authentication 

1. Go to Azure portal and sign-in using your Mission Ready email. 

2. Navigate to "Auzre Active Directory" dashboard.

3. In the active directory dashboard under manage, find "App registrations".

4. On the top left of the Navbar you will need to click on the "New registration" button 
![image](https://user-images.githubusercontent.com/53203863/206045271-ec030070-aa4b-4427-8e77-4bf64d736337.png)

5. Inside of app registration, simply provide a name for the application and click "Register"
![image](https://user-images.githubusercontent.com/53203863/206046309-6ef05148-117d-4d4e-8e3f-cb3afae9d319.png)

You will then be redirected back where you can find your "Application (client) ID". The application ID will be used when setting up authentication in Firebase.

6. To get the application secret, find "Certificates & secrets" under manage in the side navbar.  
![image](https://user-images.githubusercontent.com/53203863/206048102-50f0db31-a7c0-47c2-b236-285cbfe185ec.png)

7. In the Certificates & secrets tab, click "New client secrets". It is important to keep note of the value key that is generated, that token will be your application secret in Firebase. 



