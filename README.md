








cd main/dev/torbatti-personal/pocketbase && ./pocketbase serve
cd main/dev/torbatti-personal && npx nx run-many --all --maxParallel=10 --target=dev 

<!-- Run Pocketbase -->
cd main/dev/torbatti-personal/pocketbase 
./pocketbase serve

<!-- Run Dev -->
cd main/dev/torbatti-personal
npx nx run-many --all --maxParallel=10 --target=dev 

<!-- Build -->
npx nx run-many --all --maxParallel=10 --target=build && zip -r dist.zip dist && mv dist.zip ~

