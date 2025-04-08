import { Box, Text } from "ink";
import React, { useEffect, useState } from "react";

export const Basic = () => {
  const [frame, setFrame] = useState(0);
  const colors = ["green", "yellow", "blue", "magenta", "cyan"];
  const currentColor = colors[frame % colors.length];

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((f) => (f + 1) % colors.length);
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box flexDirection="column" alignItems="center" padding={1}>
      <Text bold color={currentColor}>
        ✨ Yahoo Finace is Running ! ✨
      </Text>
      <Box marginTop={10}/>
      <Text bold color={currentColor}>
        Integrations are run in the background when you start the hub. This yahoo finance integration is for demonstration purposes. You should see the yahoo finance store update every 30 minutes. 
      </Text>
    </Box>
  );
};

export default Basic;
