import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

export default function Login() {
  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Typography variant="h5" align="center" gutterBottom>
        로그인
      </Typography>
      <Box component="form" noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          label="이메일"
          name="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
        >
          로그인
        </Button>
      </Box>
    </Container>
  );
}
