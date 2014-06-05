### My blog

#### Quick setup

```bash
git clone git@github.com:skensell/scottkensell.com.git
./setup.sh
```

Use `startserver.sh` to run the developmentserver which will automatically regenerate the output directory when new requests are made.
Then use `stopserver.sh` to kill it.

When ready to publish do

```bash
make s3_upload
```

or to see the production version locally do
```bash
make publish
make serve
```
to see what it will look.
