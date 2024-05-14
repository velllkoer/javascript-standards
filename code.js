const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const executableName = getExecutableName(channel, appName);