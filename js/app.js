console.log('App was loaded...');
let devices = [];
let obj = { place: '', atms: [] };
let groupByPlace = [];
const data = fetch('https://difficulttochoose.github.io/work_with_true_data/data.json');
data
    .then(res => res.json())
    .then(res => {
        devices = res.devices;
        console.log('responce', res);
        for (let i = 0; i < devices.length; i++) {
            if (groupByPlace.some(el => el.place == devices[i].placeUa)) {
                for (let j = 0; j < groupByPlace.length; j++) {
                    if (groupByPlace[j].place == devices[i].placeUa)
                        groupByPlace[j].atms.push(devices[i]);
                }
            }
            if (groupByPlace.every(el => el.place != devices[i].placeUa)) {
                obj = { place: devices[i].placeUa, atms: [devices[i]] };
                groupByPlace.push(obj);
            }
        }
        console.log("groupByPlace:", groupByPlace);
        console.log("devices:", devices);
    })
    .catch((error) => { console.log('error', error) })