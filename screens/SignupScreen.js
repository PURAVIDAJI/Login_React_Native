import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false);

  async function signupHandler({ email, password }) {
    setIsLoading(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication Failed",
        "Could not create user, Please check your input and try again later..."
      );
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
