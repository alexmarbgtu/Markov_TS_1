import { usersArray, IUserGender } from './users';
import { usersInfoArray, IUserInfo } from './userInfo'
// console.log(usersArray);
// console.log(usersInfoArray);

interface IUserNewInfo {
  name: string,
  position?: string,
  age?: number,
  gender: string
}

function getUsersJobPositions(
	uArr: Array<IUserGender>,
	uInfoArr: Array<IUserInfo>
): Array<IUserNewInfo> {
	return uArr.map(element => {
		const userI = uInfoArr.find(el => el.userid === element.userid)
		return {
			name: element.name,
			position: userI?.organization.position,
			age: userI?.age,
			gender: element.gender,
		}
	})
}

const usersPositions = getUsersJobPositions(usersArray, usersInfoArray);
console.log('userPositions: ', usersPositions);
