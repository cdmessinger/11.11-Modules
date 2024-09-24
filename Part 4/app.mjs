async function loadConfig() {
     const theme = await import("./theme.mjs");
     const currentTime = new Date();
     if (currentTime.getHours() < 18) {
          theme.setLightTheme();
     } else {
          theme.setDarkTheme();
     }
}

loadConfig();
