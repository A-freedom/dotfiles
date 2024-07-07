#%%
from my_data import get_data_fram
import numpy as np
df = get_data_fram(denormliztion_data=True)

# %%
dete_describe = df.describe()
#save file
dete_describe.to_csv('DATA/statics_analysis/describe.csv')

# %%
# Calculate correlation matrix
corr_matrix = df.corr()

# Mask for upper triangle
mask = np.triu(np.ones_like(corr_matrix, dtype=bool))

# Set lower triangle values (excluding diagonal) to NaN
corr_matrix[mask] = np.nan
#save file
corr_matrix.to_csv('DATA/statics_analysis/corr_matrix.csv')
# %%