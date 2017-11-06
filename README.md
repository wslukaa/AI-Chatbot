# AI chatbot
<h1>Bank of Paribas AI interview assignment -- AI chatbot</h1>
<h2>Introduction</h2>

This is a neural chatbot using sequence to sequence model with attentional decoder. This is a fully functional chatbot.

I have taken reference on the following materials and paper:

1. Google Translate Tensorflow model https://github.com/tensorflow/models/blob/master/tutorials/rnn/translate/
2. Sequence to sequence model by Cho et al.(2014)
3. Course materials in Stanford class CS 20SI: "TensorFlow for Deep Learning Research" cs20si.stanford.edu




<h2>Flow diagram of the chatbot</h2>
Here is a flow diagram about Sequence to Sequence model used in this chatbot. 

![Alt text](https://user-images.githubusercontent.com/13085362/32421261-8764c4e0-c2d1-11e7-9b0f-5cd27a7a3f44.png)






<h2>Usage</h2>


*Step 0: Install dependencies*
```
$ pip3 install tensorflow
$ pip3 install flask
```

Step 1: create a data folder in your project directory, download
the Cornell Movie-Dialogs Corpus from
https://www.cs.cornell.edu/~cristian/Cornell_Movie-Dialogs_Corpus.html
Unzip it
*Modify the project directory in config.py*

*Step 2: python data.py*
<br>This will do all the pre-processing for the Cornell dataset.

*Step 3: python train.py*
<br>This will start training the model with the pre-processed data.

Step 4:
Start running the chatbot with your localhost server by the following code:
```
$ export FLASK_APP=serve.py
$ flask run
```
Step 5:
Open your browser and enter "localhost:5000". Now, you can start chatting with the bot.

<h2> Demo </h2>


![Alt text](https://user-images.githubusercontent.com/13085362/32421405-3af3280c-c2d3-11e7-99c0-c7281c8bc44d.png)














If mode is train, then you train the chatbot. By default, the model will
restore the previously trained weights (if there is any) and continue
training up on that.

If you want to start training from scratch, please delete all the checkpoints
in the checkpoints folder.

If the mode is chat, you'll go into the interaction mode with the bot.


>>>>>>>
