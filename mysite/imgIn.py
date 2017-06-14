import os
from amy.models import Image, ImageSet
from django.db import models
from django.core.files import File as FileWrapper

def imgInSet(setName="set", filepath='/home/matt/Documents/WebDistros/DjangoTutorial/PhotoMontage/'):
    print("Begin import...\n")

    currentImages = Image.objects.all()
    currentSets = ImageSet.objects.all()
    print("Current Sets:\t", currentSets)
    print("Current Images:\t", currentImages,"\n")

    defaultDescription = ""
    defaultName = "pic"
    defaultSetName = "set"

    counter = 1

    if(setName!="set" and (setName in currentSets)):
        #Finds Set Name
        counter = 1
        while (setName + str(counter)) in currentSets:
            counter+=1
        setName = (setName + str(counter))
    else:
        #Finds Set Name
        counter = 1
        while(defaultSetName + str(counter)) in currentSets:
            counter+=1
        setName = (defaultSetName + str(counter))

    print("Determined Set Name:\t", setName)

    #Creates Empty Set
    s = ImageSet(set_name=setName)
    print("Set Created!")

    #Begins Processing Images
    counter = 1
    createdImages = []
    for root, dirs, files in os.walk(filepath):
        print("Files:", len(files))
        for file in files:
            if file.endswith((".jpg",".png","jpeg","gif")):
                print("Importing:\t" + filepath + root + file + "... \t", end="")

                #Finds Image Name
                while (defaultName + str(counter)) in currentImages:
                    #Increment counter till a new name is formed.
                    counter+=1
                imagename = (defaultName + str(counter))

                #Imports image to database.
                f = FileWrapper(open(root + file))
                i = Image(image_set=s, img=f, name=imagename, description=defaultDescription)
                createdImages.append(i)
                print("Imported as ", imagename)

                #Moves to next image
                counter+=1

    print("Finished Creating without errors... saving...")
    s.save()
    for i in createdImages:
        i.save()
