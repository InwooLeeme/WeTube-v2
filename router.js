
// 기본 페이지

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// 사용자 중심 페이지

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PORFILE = "/edit_profile";
const CHANGEPASSWORD = "/change_password";

// 비디오 라우터들

const VIDEOS = "/videos";
const VIDEO_DETAIL = "/:id";
const VIDEO_EDIT = "/:id/edit";
const VIDEO_UPLOAD = "/upload";
const VIDEO_DELETE = "/:id/delete";


const routes = {
    home : HOME,
    join : JOIN,
    login : LOGIN,
    logout : LOGOUT,
    search : SEARCH,
    users : USERS,
    userDetail : USER_DETAIL,
    editProfile : EDIT_PORFILE,
    changePassword : CHANGEPASSWORD,
    videos : VIDEOS,
    uploadVideo : VIDEO_UPLOAD,
    editVideo : VIDEO_EDIT,
    videoDetail : VIDEO_DETAIL,
    deleteVideo : VIDEO_DELETE
};

export default routes;
