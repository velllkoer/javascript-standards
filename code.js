const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;