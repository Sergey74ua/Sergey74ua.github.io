@echo off
chcp 1251
:start
set /a RND=%random% %%1000 +1
set /a %GAME%+=1
:1
cls
set /a GAME=%GAME%+1
set /p X=������ �����: 
if %X% LSS %RND% (echo ����� ������
	pause>nul
	goto 1
	)
if %X% GTR %RND% (echo ����� ������
	pause>nul
	goto 1
	)
if %X%==%RND% (
	echo �� ��������!!!.�� ������� �����!!!
	echo � %GAME% ������� 
	pause>nul
	set /a GAME=0
	goto satrt
	)