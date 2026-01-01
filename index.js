import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

// const git = simpleGit();

const path = './data.json';
const date = moment().format();

const data = {
  date: date,
};

jsonfile.writeFile(path, data);

simpleGit().add('./*').commit(`Update data.json at ${date}`).push('origin', 'main');