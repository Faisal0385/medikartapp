export const goToDashboardScreen = (navigation) => {
  navigation.navigate("Bottom Navbar");
};

export const goToProfileScreen = (navigation) => {
  navigation.navigate("ProfileScreen");
};

export const goToPatientHistoryScreen = (navigation, asstId) => {
  navigation.navigate("PatientHistory", {asstId:asstId});
};

export const goToPatientListScreen = (navigation) => {
  navigation.navigate("PatientList");
};

export const goToSignIntScreen = (navigation) => {
  navigation.navigate("SignInScreen");
};

