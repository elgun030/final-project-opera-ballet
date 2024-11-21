import React, { useState } from 'react';
import SignIn from '../../SignIn';
import AdminSignIn from '../../AdminSignIn';

const SignInPage = () => {
  const [isAdminSignedIn, setIsAdminSignedIn] = useState(false);

  return (
    <div>
      {!isAdminSignedIn && <SignIn />}
      {isAdminSignedIn && <AdminSignIn setIsAdminSignedIn={setIsAdminSignedIn} />}
    </div>
  );
};

export default SignInPage;
