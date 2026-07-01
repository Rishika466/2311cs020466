import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

export function NotificationCard({ notification }) {
  if (!notification) return null;

  return (
    <Card elevation={3} sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="h6" fontWeight={600}>
            {notification.Message}
          </Typography>

          <Chip
            label={notification.Type}
            color={
              notification.Type === "Placement"
                ? "success"
                : notification.Type === "Result"
                ? "primary"
                : "warning"
            }
            size="small"
          />
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          ID: {notification.ID}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mt={1}
        >
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}