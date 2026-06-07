import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const NotificationCard = ({ notification }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {notification.Type}
        </Typography>

        <Typography>
          {notification.Message}
        </Typography>

        <Typography color="text.secondary">
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;