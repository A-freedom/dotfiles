#%%
from my_data import get_data_fram

df = get_data_fram(denormliztion_data=True)

# %%
dete_describe = df.describe()
dete_describe.to_csv('DATA/statics anlysice/describe.csv')

# %%
# Calculate correlation matrix
corr_matrix = df.corr()

# Replace lower triangle values (including diagonal) with NaN
corr_matrix = corr_matrix.where(np.triu(np.ones(corr_matrix.shape), k=1).astype(bool))

# Drop rows and columns with NaN values
corr_matrix = corr_matrix.dropna(axis=0, how='all').dropna(axis=1, how='all')
