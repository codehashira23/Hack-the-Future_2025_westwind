// IMPORTS
import { Grid, FormControl, Button } from "@mui/material";
import CustomInput from "./CustomInput";

// APP
export default function SettingsCard({ user, changeField, edit, genderSelect }) {
  return (
    <Grid container spacing={2}>
      {/* First Name */}
      <Grid item xs={6}>
        <CustomInput
          title="First Name"
          id="firstName"
          name="firstName"
          value={user.firstName}
          onChange={changeField}
          dis={!edit}
          req
        />
      </Grid>

      {/* Last Name */}
      <Grid item xs={6}>
        <CustomInput
          title="Last Name"
          id="lastName"
          name="lastName"
          value={user.lastName}
          onChange={changeField}
          dis={!edit}
          req
        />
      </Grid>

      {/* Email */}
      <Grid item xs={6}>
        <CustomInput
          title="Email"
          id="email"
          name="email"
          value={user.email}
          onChange={changeField}
          dis={!edit}
          req
        />
      </Grid>

      {/* Gender */}
      <Grid item xs={6}>
        <CustomInput
          title="Gender"
          id="gender"
          name="gender"
          value={user.gender}
          onChange={changeField}
          dis={!edit}
          select
          content={genderSelect}
        />
      </Grid>

      {/* Phone Number */}
      <Grid item xs={6}>
        <CustomInput
          title="Phone Number"
          id="phone"
          name="phone"
          value={user.phone}
          onChange={changeField}
          dis={!edit}
        />
      </Grid>

      {/* City */}
      <Grid item xs={6}>
        <CustomInput
          title="City"
          id="city"
          name="city"
          value={user.city}
          onChange={changeField}
          dis={!edit}
        />
      </Grid>

      {/* Submit Button */}
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log("Save Changes")}
          fullWidth
          disabled={!edit}
        >
          Save Changes
        </Button>
      </Grid>
    </Grid>
  );
}
