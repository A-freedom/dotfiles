import numpy as np
from sklearn.neighbors import LocalOutlierFactor


import numpy as np

def distance_filter(df):
    # Define a function to calculate the Euclidean distance between two 6-dimensional vectors

    # Define a threshold for the distance between 6-dimensional X values
    distance_threshold = 0.013  # Adjust this threshold based on your data and requirements

    # Extract the 6-dimensional X values from the DataFrame
    X = df.iloc[:, :6].values

    # Calculate pairwise distances using vectorized operations
    distances = np.sqrt(np.sum((X[:, np.newaxis] - X) ** 2, axis=-1))

    # Set the diagonal elements (distance to itself) to a large value to exclude them
    np.fill_diagonal(distances, np.inf)

    # Create a mask to identify rows to keep
    keep_mask = np.ones(len(df), dtype=bool)

    # Iterate over rows to identify rows to keep
    for i in range(len(df)):
        # Find rows closer than the threshold
        close_rows = np.where(distances[i] < distance_threshold)[0]
        # Keep the first row in each close set
        if len(close_rows) > 0:
            keep_mask[close_rows[0]] = True
            # Mark other close rows for removal
            for row in close_rows[1:]:
                keep_mask[row] = False

    # Filter the data based on the keep_mask
    filtered_df = df[keep_mask]

    return filtered_df


def outlier_filter(df):
    # Assuming X_columns are the columns containing your features
    X = df.iloc[:, :6].values

    # Create an instance of the LOF algorithm
    lof = LocalOutlierFactor(n_neighbors=20)  # Adjust parameters as needed

    # Fit the LOF model to your data
    lof.fit(X)

    # Predict the outlier scores for each data point
    # Negative scores indicate outliers, with lower scores indicating higher outlier likelihood
    outlier_scores = lof.negative_outlier_factor_

    # Set a threshold for outlier scores
    threshold = -1.50  # Adjust as needed

    # Find indices of rows with outlier scores below the threshold
    outlier_indices = outlier_scores < threshold

    # Remove rows with outlier scores below the threshold from the DataFrame
    filtered_df = df[~outlier_indices]

    return filtered_df