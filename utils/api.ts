import fs from 'fs';
import { join } from 'path';

// export function getData() {
//     let dir = join(process.cwd(), 'data');

// 	return fs.readdirSync(dir);
// }

export function getByYear(year: number, fields: string[] = []) {
    // console.log(year, 'year');
	// const fileYear = year.replace(/\.json$/, '');
	let fullPath = '';

	fullPath = join('data', `${year}.json`);

	try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const data = JSON.parse(fileContents);
        // const items: any = {};

		// fields.forEach((field) => {
		// 	if (field === 'id') {
		// 		items[field] = fileYear;
		// 	}
		// 	if (data[field]) {
		// 		items[field] = data[field];
		// 	}
		// });

		return data;
	} catch {
		return null;
	}
}

// export function getAllData(fields: string[] = []) {
//     const users = getData();
// 	const usersData = users.map((user) => getByYear(user, fields), []);

// 	return usersData;
// }

// export function getPathsObject() {
// 	const users = getData();
// 	const paths = users.map((user) => {
// 		return {
// 			year: user.replace(/\.json$/, ''),
// 			// get last modified date
// 			lastMod: fs.statSync(join('data', user)).mtime.getTime(),
// 		};
// 	});

// 	return paths;
// };

export function formatDate(date: string | number | Date) {
    var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
};