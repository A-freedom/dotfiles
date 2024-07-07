# Define custom standard deviation metric function

def custom_std(y_true, y_pred):
    return tf.math.reduce_std(y_true - y_pred / y_true)