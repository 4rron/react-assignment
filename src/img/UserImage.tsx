import Image from './UserImage.png';
function UserImage(){

    return (
    <svg className='nav-bottom'
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50">
        <title>Profile</title>
        <circle cx="25" cy="25" r="25" />
        <image 
            x="5" y="5"
            width="40" height="40"
            href={Image}
        / >
    </svg>
    )
}

export default UserImage;