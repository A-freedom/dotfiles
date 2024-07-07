#%%
from my_data import get_data_fram

df = get_data_fram(denormliztion_data=True)

# %%

dete_descrip = df.describe().to_csv('DATA/statics anlysice/describe.csv')
# %%
