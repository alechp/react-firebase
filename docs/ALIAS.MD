<h1>Alias</h2>
Fewer keystrokes saves sanity.

<h2>Getting Started</h2>

* **How I use Project-Specific Aliases** gives an indepth walkthrough. Because this is relevant to my individual setup, I wanted to make sure the decisions I was making were transparent.
* **TLDR - Getting Started** gives you the command list to follow. 


<h4>How I Use Project-Specific Aliases</h4>
1. I have a `.bash_aliases` directory where all of my aliases are categorized and stored (yes, I use git to manage).
2. In my .zshrc file, I execute `source ~/.bash_profile` (at the bottom of the config). I do this because I'd already setup my environment in bash.
3. In .bash_profile file, I execute `for a in ~/.bash_aliases/*; do source $a; done`. This automatically loads all aliases.
4. Finally, I create a symbolic link to the alias file by running `ln -s ~/.../your/path/to/react-firebase/.../build/alias react_firebase_alias` (modify to your directory path)
5. Lastly, source your shell config file to associate your terminal with the new aliases.

<h4>TLDR - Getting Started</h4>
1. Make bash aliases directory
```
mkdir ~/.bash_aliases
```

2. Update your .zshrc (if relevant)
```
source ~/.bash_profile
```

3. Import the bash aliases directory into bash_profile
```
nano .bash_profile
for a in ~/.bash_aliases/*; do source $a; done
```

4. Create symbolic link in bash_aliases directory  
```
cd ~/.bash_aliases
ln -s ~/.../your/path/to/react_firebase/.../build/alias react_firebase_alias
```

5. Update your terminal
```
source ~/.bash_profile
```

-----------