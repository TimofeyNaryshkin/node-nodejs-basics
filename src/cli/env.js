const parseEnv = () => {
  const vars = Object.entries(process.env)
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`);
  console.log(vars.join("; "));
};

parseEnv();
