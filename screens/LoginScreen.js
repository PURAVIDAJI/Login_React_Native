import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { login } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  async function loginHandler({ email, password }) {
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication Failed",
        "Could not log you in. Please check your credentials"
      );
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
