//export const API_BASE_URL = 'https://example.com/api';
//export const API_PATH = '/path';

export const api_path = 'https://lmsnodeadmin.onrender.com/';

export const API_USER_SENDOTP_LOGIN_URL = `${api_path}api/register/user_auth`;
export const API_USER_SENDOTP_URL  =`${api_path}api/register/otp_validate`;
export const API_USER_REGISTER_URL  =`${api_path}api/register/user_auth_register`;
export const API_USER_AUTH_LOGIN_URL = `${api_path}api/register/user_auth_login`;
export const API_USER_REGISTER_OTP_VALIDATE_LOGIN_URL = `${api_path}api/register/otp_validate_login`;
export const API_FETCH_COURSES_URL = `${api_path}api/course/details`;
export const API_FETCH_RELATED_COURSES_URL = `${api_path}api/course/details_random`;
export const API_FETCH_COURSES_PLAYLIST_URL = `${api_path}api/course/details_by_category`;
export const API_FETCH_COURSES_PLAYLIST_CHAPTER_LIST_URL = `${api_path}api/course/playlist_all_chapter`;

export const API_FETCH_COURSES_PLAYLIST_SHOW_LIST_URL = `${api_path}api/course/playlist_show`;
export const API_FETCH_COURSES_PLAYLIST_FILTER_LIST_URL = `${api_path}api/course//playlist_filter`;
export const API_FETCH_COURSES_PLAYLIST_PAYMENT_LIST_URL = `${api_path}api/payment_page/payment`;
export const API_DISCOUNT_COUPON_URL = `${api_path}api/payment_page/coupon`;
export const API_COURSES_PAYMENT_URL = `${api_path}api/payment_page/payment_done`;
export const API_COURSES_PAYMENT_ORDER_STATUS_URL = `${api_path}api/payment_page/user_order`;
export const API_FETCH_TEACHER_PLAYLIST_SHOW_LIST_URL = `${api_path}api/teacher/show`;
export const API_FETCH_TEACHER_DETAILS_LIST_URL = `${api_path}api/teacher/show_teacher`;
export const API_FETCH_VIDEO_API = `${api_path}api/course/videos`;
export const API_FETCH_ALL_PLAYLIST_VIDEO_API = `${api_path}api/course/videos_playlist`;
export const API_FETCH_ALL_VIDEO_WATCHED_API = `${api_path}api/course/video_watched`;
export const API_FETCH_ALL_VIDEO_WATCHED_STATUS_API = `${api_path}api/course/video_watched_status`;

export const API_FETCH_USER_PROFILE_URL =  `${api_path}api/profile/user_profile`;
export const API_UPDATE_USER_PROFILE_URL = `${api_path}api/profile/user_profile_update`;

export const API_MCQ_COURSES_URL = `${api_path}api/mcq/course`;
export const API_MCQ_COURSES_LEVEL_URL = `${api_path}api/mcq/level`;
export const API_MCQ_QUESTION_URL = `${api_path}api/mcq/question`;
export const API_MCQ_QUESTION_SUBMIT_URL = `${api_path}api/mcq/answer_submit`;
export const API_MCQ_PREVIOS_SUBMIT_URL= `${api_path}api/mcq/answer_previos`;
export const API_MCQ_SUBMIT_RESULT_URL= `${api_path}api/mcq/result`;
export const API_FETCH_MCQ_ALL_RESULT_URL= `${api_path}api/mcq/result_all`; 

export const API_PROFILE_ENROLL_COURSES_URL= `${api_path}api/profile/enroll_courses`;
export const API_PROFILE_ORDER_HISTORY_URL= `${api_path}api/payment_page/order_history`;

export const API_ASSIGNMENT_NOTIFICATION_URL =`${api_path}api/assignment/get_notification`;
export const API_ASSIGNMENT_QUESTION_URL=`${api_path}api/assignment/get_assignment_question`;

export const API_ASSIGNMENT_QUESTION_ANS_URL=`${api_path}api/assignment/get_assignment_answer`;
export const API_NEXT_QUESTION_ANS_URL=`${api_path}api/assignment/getnextid`;
export const API_STUDENT_ATTEND_CLASS_URL=`${api_path}api/student/student_class_attendence`;
export const API_STUDENT_HOMEWORK_URL=`${api_path}api/student/get_every_stundet_homework`;
export const API_STUDENT_CLASSWORK_URL=`${api_path}api/student/get_every_stundet_classwork`;
export const API_STUDENT_HOMEWORK_LIVECLASS_URL=`${api_path}api/assignment/get_home_work`;
export const API_STUDENT_HOMEWORK_LIVECLASS_STATUS_URL=`${api_path}api/assignment/work_done_status`;
export const API_STUDENT_WORKDETIALS_URL=`${api_path}api/teacher_auth_login/view_all_assignment_allquestion`;
export const API_LIVECLASS_ORAL_URL=`${api_path}api/assignment/get_class_oral`;
export const API_LIVECLASS_ORA_QUESTIONL_URL=`${api_path}api/assignment/get_assignment_question`;
export const API_LIVECLASS_ORA_QUESTIONL_ANS_SUBMIT_URL=`${api_path}api/assignment/get_class_oral_answer`;

export const API_LIVECLASS__CLASS_ORAL_ASSIGNMENT_URL=`${api_path}api/student/get_every_stundet_classwork_oral`;

//export const API_UPDATE_USER_PROFILE_URL ='http://localhost/apis/update_student_api.php';
// export const API_FETCH_USER_PROFILE_URL = 'http://localhost/apis/user_fetch_apii.php';



export const API_FETCH_EDUCATORS_ABOUT_URL ='http://localhost/apis/fetch_educators_api.php';



//`${API_BASE_URL}${API_PATH}/${dynamicValue}`