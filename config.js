// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 4;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow  (I don't think we need to follow the point, showing an overall and just line progressing is enough)
var followPoint = false;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 14;
var followBearing = 29;
var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/cxa3740/ckhpz4vka0jle19nqs0zqid0s',
    accessToken: 'pk.eyJ1IjoiY3hhMzc0MCIsImEiOiJja2hteW9jZW8weDRyMnJudXlza2MwdHh6In0.oVv8dLZ4PfT2zvvmkQ2EAA',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'drive-slide-0',
            description: 'Out of all the Ivy League football athletes, a typical Lion would need to travel the furthest to reach their home court at Columbia’s Baker Athletic Complex.',
            //replace step with description from doc 
            location: {
                center: [-73.96373, 40.80807],
            },
            onChapterEnter: [],
            //start
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            description: '5 minutes into the bus ride to Baker, the typical Penn footballer would have reached their destination by walking from the center of their campus.',
            location: {
                center: [-73.95933, 40.82018],
            },
            onChapterEnter: [],
            //Route reaches Penn marker on map
            onChapterExit: []
            //8 mins (Apprx~1.8 miles in)
        },
        {
            id: 'drive-slide-2',
            description: '10 minutes in, Dartmouth, Princeton, and Brown footballers would have also reached their destination by walking.',
            location: {
                center: [-73.94917,40.83633],
            },
            onChapterEnter: [],
            //when route reaches Darmouth marker 
            onChapterExit: []
            //when route reaches 10 mins (Apprx~2.25 miles in)
        },
        {
            id: 'drive-slide-3',
            description: '20 minutes in, Cornell, Harvard, and Yale students would have reached their destination by either driving or walking.',
            location: {
                center: [-73.93233, 40.86623],
            },
            onChapterEnter: [],
            //Route reaches Cornell marker
            onChapterExit: []
            //sRoute reaches 20 mins (Apprx~4.50 miles in)
        },
        {
            id: 'drive-slide-4',
            description: 'It takes a total of 25 minutes for Lions to reach Baker--almost an hour round trip that is sometimes worsened by traffic.',
            location: {
                center: [-73.91622, 40.8721]
            },
            onChapterEnter: [],
            //Route reaches Baker 
            onChapterExit: []
        }
    ]
};

