import { Card, CardContent, Typography, Box, SxProps, Theme } from '@mui/material';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  sx?: SxProps<Theme>;
}

const FeatureCard = ({ icon, title, description, sx }: FeatureCardProps) => {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(8px)',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
        ...sx
      }}
    >
      <CardContent>
        <Box sx={{ mb: 2, color: 'primary.main', fontSize: '2.5rem' }}>
          {icon}
        </Box>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
