In this project, let's build **Nxt Trendz** app with authentication by applying the concepts we have 
### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-output-v2.gif" alt="nxt trendz authentication desktop output" style="max-width:90%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>



### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When invalid credentials are provided in the login form and **Login** button is clicked, then the respective error message from the response should be displayed
- When the **username** and **password** are provided co
</details>

<details>

<summary>API Requests & Responses</summary>
<br/>

**loginApiUrl**

#### API: `https://apis.ccbp.in/login`

#### Method: `POST`

#### Description:

Returns a response based on the credentials provided

#### Sample Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- `Home` route should consist of `/` in the URL path
- `Login` route should consist of `/login` in the URL path
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js`
- User credentials

  ```text
   username: rahul
   password: rahul@2021
  ```

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png) alt should be **website logo**
- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png) alt should be **website login**
- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png) alt should be **clothes that get you noticed**
- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png) alt should be **nav logout**
- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png) alt should be **nav home**
- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png) alt should be **nav products**
- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png) alt should be **nav cart**

</details>


