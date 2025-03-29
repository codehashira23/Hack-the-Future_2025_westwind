// // IMPORTS
// import { useState } from "react";
// import { Container, Typography, Button } from "@mui/material";
// import SettingsCard from "./components/SettingsCard";

// // APP
// export default function Dashboard() {
//   const [user, setUser] = useState({
//     firstName: "John",
//     lastName: "Doe",
//     email: "john.doe@example.com",
//     gender: "Male",
//     phone: "123-456-7890",
//     city: "New York"
//   });

//   const [edit, setEdit] = useState(false);

//   const changeField = (e) => {
//     const { name, value } = e.target;
//     setUser((prev) => ({ ...prev, [name]: value }));
//   };

//   const genderSelect = (
//     <>
//       <option value="Male">Male</option>
//       <option value="Female">Female</option>
//       <option value="Other">Other</option>
//     </>
//   );

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         User Profile
//       </Typography>
//       <Button
//         variant="contained"
//         onClick={() => setEdit(!edit)}
//         sx={{ mb: 2 }}
//       >
//         {edit ? "Cancel" : "Edit"}
//       </Button>
//       <SettingsCard
//         user={user}
//         changeField={changeField}
//         edit={edit}
//         genderSelect={genderSelect}
//       />
//     </Container>
//   );
// }
