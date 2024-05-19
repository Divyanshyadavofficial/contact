import React from "react";
import Card from "./card";
function App() {
  return (
    <div>
      <h1 className="heading"> Contacts</h1>
      <Card
        name="Roshan Singh"
        img="https://media.licdn.com/dms/image/D4D03AQEbm7kQfMWYAg/profile-displayphoto-shrink_400_400/0/1668480129438?e=1721865600&v=beta&t=bvq5Di1X7pA8m8wQh3EGgEq6nvnyYqvcRAd3atYsid0"
        tel="9968290156"
        email="roshan.singh@imcoded.com"
      />
      <Card
        name="Tushar"
        img="https://media.licdn.com/dms/image/D5603AQEydSAGKwP2Yw/profile-displayphoto-shrink_400_400/0/1709286875953?e=1721865600&v=beta&t=rNZGLQ1oBV-xMSNy7wRCxQH_Dkz0MK4agiqrk1Ll5lc"
        tel="9968290156"
        email="tushar.khatri@imcoded.com"
      />
      <Card
        name="Imcoded"
        img="https://www.imcoded.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fxcuqahb2st38%2Fimcoded%2Fscaled_logo.png%3FupdatedAt%3D1689662334767&w=64&q=75"
        tel="9968290156"
        email="imcoded.com"
      />
    </div>
  );
}
export default App;
