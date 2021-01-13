export const config = {
  'username': 'upain',//process.env.POSTGRES_USERNAME,
  'password': 'upain1521',//process.env.POSTGRES_PASSWORD,
  'database': 'postgres',//process.env.POSTGRES_DB,
  'host': 'upaindatabase.cuoc9p7r1sjz.us-east-2.rds.amazonaws.com',//process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'aws_region': 'us-east-2b',//process.env.AWS_REGION,
  'aws_profile': 'default',// process.env.AWS_PROFILE,
  'aws_media_bucket':'arn:aws:s3:::newbucket1321', //process.env.AWS_BUCKET,
  'url': 'http://localhost:8100',//process.env.URL,
  'jwt': {
    'secret': 'roberto'//process.env.JWT_SECRET,
  },
};
