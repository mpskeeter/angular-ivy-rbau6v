import {
  Course,
  CourseCategory,
  Enrollment,
  PlayList,
  PlayListItem,
  PlayListSource,
  Role,
  Status,
  Tag,
  User,
} from '../../shared-types';

//#region RawCourseCategory
export const rawRawCourseCategory: Partial<CourseCategory>[] = [
  {
    id: 1,
    name: 'Developer',
    image:
      'https://s3.envato.com/files/3c53ef5b-f3d4-49e0-82bd-376915ff94b6/inline_image_preview.jpg',
  },
  {
    id: 2,
    name: 'System Admin',
    image:
      'https://i1.wp.com/jobs365.co.za/wp-content/uploads/2019/07/SYSTEM-ADMINISTRATOR.jpg?fit=1200%2C798&ssl=1',
  },
  {
    id: 3,
    name: 'Network Admin',
    image:
      'https://www.earnmydegree.com/sites/all/files/public/images/shutterstock_329986208.jpg',
  },
  {
    id: 4,
    name: 'Site Lead',
    image:
      'https://heritageofficesuites.com/wp-content/uploads/2017/05/Meeting-Room-Image-19.jpg',
  },
];

export const getRawRawCourseCategory = (
  categoryId: number
): Partial<CourseCategory> =>
  rawRawCourseCategory.find((category) => category.id === categoryId);
//#endregion

//#region RawStatus
export const rawStatus: Partial<Status>[] = [
  {
    id: 1,
    name: 'Active',
  },
  {
    id: 2,
    name: 'Inactive',
  },
  {
    id: 3,
    name: 'Working',
  },
];

export const getRawStatus = (statusId: number): Partial<Status> =>
  rawStatus.find((status) => status.id === statusId);
//#endregion

//#region RawTags
export const rawRawTags: Partial<Tag>[] = [
  {
    id: 1,
    name: 'Developer',
    image:
      'https://s3.envato.com/files/3c53ef5b-f3d4-49e0-82bd-376915ff94b6/inline_image_preview.jpg',
  },
  {
    id: 2,
    name: 'System Admin',
    image:
      'https://i1.wp.com/jobs365.co.za/wp-content/uploads/2019/07/SYSTEM-ADMINISTRATOR.jpg?fit=1200%2C798&ssl=1',
  },
  {
    id: 3,
    name: 'Network Admin',
    image:
      'https://www.earnmydegree.com/sites/all/files/public/images/shutterstock_329986208.jpg',
  },
  {
    id: 4,
    name: 'Site Lead',
    image:
      'https://heritageofficesuites.com/wp-content/uploads/2017/05/Meeting-Room-Image-19.jpg',
  },
];

export const getRawRawTag = (tagId: number): Partial<Tag> =>
  rawRawTags.find((tag) => tag.id === tagId);
//#endregion

//#region Roles
export const rawRoles: Partial<Role>[] = [
  { id: 1, name: 'user' },
  { id: 2, name: 'author' },
  { id: 3, name: 'manager' },
  { id: 4, name: 'admin' },
];

export const getRawRole = (roleId: number): Partial<Role> =>
  rawRoles.find((role) => role.id === roleId);
//#endregion

//#region RawCourses
export const rawRawCourses: Partial<Course>[] = [
  {
    id: 1,
    name: 'Angular',
    subject: 'Subject 1',
    image: 'https://angular.io/assets/images/logos/angular/angular.svg',
    description: "The modern web developer's platform",
    duration: '2 weeks',
    provider: 'Google',
    datePublished: new Date('2014-11-01'),
    dateUpdated: new Date('2016-12-22'),
    rating: 4.73,
    statusId: 1,
    status: getRawStatus(1),
    // tags: [getRawTag(1)],
  },
  {
    id: 2,
    name: 'Typescript',
    subject: 'Subject 2',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    description: 'The modern javascript language',
    duration: '2 weeks',
    provider: 'Udemy',
    datePublished: new Date('2017-02-01'),
    dateUpdated: new Date('2019-12-10'),
    rating: 4.9,
    statusId: 1,
    status: getRawStatus(1),
    // tags: [getRawTag(1)],
  },
  {
    id: 3,
    name: 'Business Intelligence',
    subject: 'Subject 3',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/8e/Business-Intelligence-800x493.jpg',
    description:
      'Develop a data mindset and the analytical skills to interpret and communicate data while applying concepts to real business...',
    duration: '2 weeks',
    provider: 'Harvard University',
    datePublished: new Date('2018-04-04'),
    dateUpdated: new Date('2020-12-10'),
    rating: 4.1,
    statusId: 1,
    status: getRawStatus(1),
    // tags: [getRawTag(3)],
  },
  {
    id: 4,
    name: 'Open-Source Intelligence (OSINT) Gathering and Analysis',
    subject: 'Subject 4',
    image: 'https://www.maltego.com/images/uploads/teaser-osint.png',
    description:
      'This course goes from scratch to advanced; it covers the most critical aspect of OSINT (open-source intelligence). The OSINT plays a vital role in the ethical hacking/ Penetration testing process; hence this program is equally essential for intelligence officers, ethical hackers, marketers, HR, and cybersecurity professionals.',
    duration: '1hr 47min',
    provider: 'Udemy',
    datePublished: new Date('2021-04-04'),
    dateUpdated: new Date('2021-04-04'),
    rating: 3.9,
    statusId: 1,
    status: getRawStatus(1),
    // tags: [getRawTag(4)],
  },
];

export const getRawRawCourse = (courseId: number): Partial<Course> =>
  rawRawCourses.find((course) => course.id === courseId);
//#endregion

//#region PlayListSources
export const rawPlayListSources: Partial<PlayListSource>[] = [
  {
    id: 1,
    url: 'https://vjs.zencdn.net/v/oceans.mp4',
    mimeType: 'video/mp4',
  },
  {
    id: 2,
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    mimeType: 'video/mp4',
  },
  {
    id: 3,
    url: 'https://www.cdc.gov/coronavirus/2019-ncov/videos/partner-calls/2021.08.23_Partner-Update-Slides_FINAL.pptx',
    mimeType: 'application/mspowerpoint',
  },
  {
    id: 4,
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    mimeType: 'video/mp4',
  },
  {
    id: 5,
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    mimeType: 'video/mp4',
  },
  {
    id: 6,
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    mimeType: 'video/mp4',
  },
  {
    id: 7,
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    mimeType: 'video/mp4',
  },
  {
    id: 8,
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    mimeType: 'video/mp4',
  },
];

export const getRawPlayListSource = (itemId: number): Partial<PlayListSource> =>
  rawPlayListSources.find((item) => item.id === itemId);
//#endregion

//#region PlayListItems
export const rawPlayListItems: Partial<PlayListItem>[] = [
  {
    id: 1,
    name: 'Ocean feeding frenzy',
    author: 'Super Mario',
    duration: 200000,
    sources: [1, 2].map((sourceItem, index) => ({
      ...getRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: true,
  },
  {
    id: 2,
    name: 'Other than Video',
    author: 'Super Mario',
    duration: 0,
    sources: [3].map((sourceItem, index) => ({
      ...getRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: true,
  },
  {
    id: 3,
    name: 'Big buck bunny short film',
    author: 'Super Mario',
    duration: 300000,
    sources: [4].map((sourceItem, index) => ({
      ...getRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: true,
  },
  {
    id: 4,
    name: 'Elephants dream short film',
    author: 'Super Mario',
    duration: 400000,
    sources: [5].map((sourceItem, index) => ({
      ...getRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
  {
    id: 5,
    name: 'Chromecast commercial: For bigger blazes',
    author: 'Super Mario',
    duration: 600000,
    sources: [6].map((sourceItem, index) => ({
      ...getRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
  {
    id: 6,
    name: 'Chromecast commercial: For bigger escapes',
    author: 'Super Mario',
    duration: 500000,
    sources: [7].map((sourceItem, index) => ({
      ...getRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
  {
    id: 7,
    name: 'Chromecast commercial: For bigger fun',
    author: 'Super Mario',
    duration: 200000,
    sources: [2].map((sourceItem, index) => ({
      ...getRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
  {
    id: 8,
    name: 'Chromecast commercial: For bigger joy rides',
    author: 'Super Mario',
    duration: 700000,
    sources: [8].map((sourceItem, index) => ({
      ...getRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
  {
    id: 9,
    name: 'Chromecast commercial: For bigger browsers',
    author: 'Super Mario',
    duration: 700000,
    sources: [2].map((sourceItem, index) => ({
      ...getRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
  {
    id: 10,
    name: 'Chromecast commercial: For bigger browsers',
    author: 'Super Mario',
    duration: 700000,
    sources: [2].map((sourceItem, index) => ({
      ...getRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
  {
    id: 11,
    name: 'Chromecast commercial: For bigger browsers',
    author: 'Super Mario',
    duration: 700000,
    sources: [2].map((sourceItem, index) => ({
      ...getRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
  {
    id: 12,
    name: 'Chromecast commercial: For bigger browsers',
    author: 'Super Mario',
    duration: 700000,
    sources: [2].map((sourceItem, index) => ({
      ...getRawPlayListSource(sourceItem),
      seq: index + 1,
    })),
    watched: false,
  },
];

export const getRawPlayListItem = (itemId: number): Partial<PlayListItem> =>
  rawPlayListItems.find((item) => item.id === itemId);
//#endregion

//#region PlayLists
// updated 2022-02-14
export const rawPlayLists: Partial<PlayList>[] = [
  {
    id: 1,
    name: 'Demo 1',
    description: 'Demo 1',
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
      (item: number, index: number) => ({
        ...getRawPlayListItem(item),
        seq: index + 1,
      })
    ),
  },
  {
    id: 2,
    name: 'MyDevLMS',
    description: 'MyDevLMS',
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    items: [1, 2, 3].map((item: number, index: number) => ({
      ...getRawPlayListItem(item),
      seq: index + 1,
    })),
  },
  {
    id: 3,
    name: 'Site Lead',
    description: 'Site Lead',
    createdAt: new Date('2021-04-04'),
    updatedAt: new Date('2021-04-04'),
    items: [5, 7, 2].map((item: number, index: number) => ({
      ...getRawPlayListItem(item),
      seq: index + 1,
    })),
  },
];

export const getRawPlayList = (playListId: number): Partial<PlayList> =>
  rawPlayLists.find(
    (playlist: Partial<PlayList>) => playlist.id === playListId
  );
//#endregion

//#region Courses
const buildPlaylist = (playlistId: number) => ({
  playlistId,
  playlist: getRawPlayList(playlistId),
});

export const rawCourses: Partial<Course>[] = [
  {
    ...getRawRawCourse(1),
    categories: [getRawRawCourseCategory(1)],
    tags: [getRawRawTag(1)],
    ...buildPlaylist(1),
  },
  {
    ...getRawRawCourse(2),
    categories: [getRawRawCourseCategory(1), getRawRawCourseCategory(2)],
    tags: [getRawRawTag(1)],
    ...buildPlaylist(2),
  },
  {
    ...getRawRawCourse(3),
    categories: [getRawRawCourseCategory(3)],
    tags: [getRawRawTag(3)],
    ...buildPlaylist(2),
  },
  {
    ...getRawRawCourse(4),
    categories: [getRawRawCourseCategory(4)],
    tags: [getRawRawTag(4)],
    ...buildPlaylist(3),
  },
];

export const getRawCourse = (courseId: number): Partial<Course> =>
  rawCourses.find((course) => course.id === courseId);
//#endregion

//#region Tags
export const rawTags: Partial<Tag>[] = [
  { ...getRawRawTag(1), courses: [getRawCourse(1), getRawCourse(2)] },
  { ...getRawRawTag(2), courses: [] },
  { ...getRawRawTag(3), courses: [getRawCourse(3)] },
  { ...getRawRawTag(4), courses: [getRawCourse(4)] },
];

export const getRawTag = (tagId: number): Partial<Tag> =>
  rawTags.find((tag) => tag.id === tagId);
//#endregion

//#region CourseCategory
export const rawCourseCategory: Partial<CourseCategory>[] = [
  {
    ...getRawRawCourseCategory(1),
    courses: [getRawCourse(1), getRawCourse(2)],
  },
  { ...getRawRawCourseCategory(2), courses: [getRawCourse(2)] },
  { ...getRawRawCourseCategory(3), courses: [getRawCourse(3)] },
  { ...getRawRawCourseCategory(4), courses: [getRawCourse(4)] },
];

export const getRawCourseCategory = (
  categoryId: number
): Partial<CourseCategory> =>
  rawCourseCategory.find((category) => category.id === categoryId);
//#endregion

//#region Users
export const rawRawUsers: Partial<User>[] = [
  {
    id: 1,
    displayName: 'John Doe',
    firstName: 'John',
    lastName: 'Doe',
    emailAddress: 'johndoe@sample.com',
    // picture: 'https://randomuser.me/api/portraits/men/21.jpg',
    roles: [getRawRole(1), getRawRole(4)],
    color: '#3670b2',
    status: 'online',
  },
  {
    id: 2,
    displayName: 'Jane Smith',
    firstName: 'Jane',
    lastName: 'Smith',
    emailAddress: 'janesmith@sample.com',
    picture: 'https://randomuser.me/api/portraits/women/6.jpg',
    roles: [getRawRole(1)],
    color: '#468547',
    status: 'offline',
  },
  {
    id: 3,
    displayName: 'Jim Doe',
    firstName: 'Jim',
    lastName: 'Doe',
    emailAddress: 'jimdoe@sample.com',
    // picture: 'https://randomuser.me/api/portraits/men/21.jpg',
    roles: [getRawRole(1), getRawRole(4)],
    color: '#3670b2',
  },
  {
    id: 4,
    displayName: 'James Doe',
    firstName: 'James',
    lastName: 'Doe',
    emailAddress: 'jamesdoe@sample.com',
    // picture: 'https://randomuser.me/api/portraits/men/21.jpg',
    roles: [getRawRole(1), getRawRole(4)],
    color: '#3670b2',
  },
];

export const getRawRawUser = (userId: number): Partial<User> =>
  rawRawUsers.find((user) => user.id === userId);
//#endregion

//#region Enrollments
// const enroll = [
//   {
//     userId: 1,
//     courses: [1, 2, 3, 4],
//   },
//   {
//     userId: 2,
//     courses: [1, 2, 3, 4],
//   },
//   {
//     userId: 3,
//     courses: [1, 2, 3],
//   },
//   {
//     userId: 4,
//     courses: [4],
//   },
// ];

export const rawEnrollments: Partial<Enrollment>[] = [
  {
    id: 1,
    userId: 1,
    courseId: 1,
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
    course: getRawCourse(1),
    user: getRawRawUser(1),
  },
  {
    id: 2,
    userId: 1,
    courseId: 2,
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
    course: getRawCourse(2),
    user: getRawRawUser(1),
  },
  {
    id: 3,
    userId: 1,
    courseId: 3,
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
    course: getRawCourse(3),
    user: getRawRawUser(1),
  },
  {
    id: 4,
    userId: 1,
    courseId: 4,
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
    course: getRawCourse(4),
    user: getRawRawUser(1),
  },
  {
    id: 5,
    userId: 2,
    courseId: 1,
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
    course: getRawCourse(1),
    user: getRawRawUser(2),
  },
  {
    id: 6,
    userId: 2,
    courseId: 2,
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
    course: getRawCourse(2),
    user: getRawRawUser(2),
  },
  {
    id: 7,
    userId: 2,
    courseId: 3,
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
    course: getRawCourse(3),
    user: getRawRawUser(2),
  },
  {
    id: 8,
    userId: 2,
    courseId: 4,
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
    course: getRawCourse(4),
    user: getRawRawUser(2),
  },
  {
    id: 9,
    userId: 3,
    courseId: 1,
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
    course: getRawCourse(1),
    user: getRawRawUser(3),
  },
  {
    id: 10,
    userId: 3,
    courseId: 2,
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
    course: getRawCourse(2),
    user: getRawRawUser(3),
  },
  {
    id: 11,
    userId: 3,
    courseId: 3,
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
    course: getRawCourse(3),
    user: getRawRawUser(3),
  },
  {
    id: 12,
    userId: 4,
    courseId: 4,
    dateEnrolled: new Date('2022-02-01'),
    dateCompleted: null,
    course: getRawCourse(4),
    user: getRawRawUser(4),
  },
];

export const getRawEnrollment = (enrollmentId: number): Partial<Enrollment> =>
  rawEnrollments.find(
    (enrollment: Partial<Enrollment>) => enrollment.id === enrollmentId
  );

export const getRawEnrollmentsForUser = (
  userId: number
): Partial<Enrollment>[] =>
  rawEnrollments.filter(
    (enrollment: Partial<Enrollment>) => enrollment.userId === userId
  );
//#endregion

//#region rawUsers
export const rawUsers: Partial<User>[] = [
  ...[1, 2, 3, 4].map((index: number) => ({
    ...rawRawUsers.find((user) => user.id === index),
    enrollments: rawEnrollments.filter(
      (enrollment) => enrollment.userId === index
    ),
  })),
];

export const getRawUser = (userId: number): Partial<User> =>
  rawUsers.find((user: Partial<User>) => user.id === userId);
//#endregion
