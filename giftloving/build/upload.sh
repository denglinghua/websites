if [ -f ".env.local" ]; then
  echo ".env.local already exists."
else
  echo "Copying .env.local here..."
  cp ../../../data/do_server.evn.local .env.local
fi

source .env.local
echo $KEY_FILE
echo $USER
echo $IP

scp -i $KEY_FILE -r ../public/img/* $USER@$IP:/var/www/giftloving.ca/html/img/
