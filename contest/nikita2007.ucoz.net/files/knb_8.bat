
@echo off      
chcp 1251
cls
title ������ ������� ������ 
:1
echo:
echo                 _           _   ___________ 
echo                 \\         //  !           !
echo      ��          \\       //   !           !
echo     �����         \\     //    !           !
echo    �������         \\   //     !           !
echo   ����������        \\ //      !           !
echo  ������������    OOOOO OOOOO   !           !
echo  ������������    O   O O   O   !           !
echo   ����������     OOOOO OOOOO   !___________!
echo:
choice /c 123 /n /m "������� 1(������),2(�������) ��� 3(������) : 
set KNB=%errorlevel%
cls
if %KNB%==1 (echo �� �������       : ������)
if %KNB%==2 (echo �� �������       : �������)
if %KNB%==3 (echo �� �������       : ������)

set /a RND=1+3*%random%/32767

if %RND%==1 (echo ��������� ������ : ������)
if %RND%==2 (echo ��������� ������ : �������)
if %RND%==3 (echo ��������� ������ : ������)

set /a GAME=%GAME%+1

if %KNB%==%RND% (echo ����� & set /a DRAW=%DRAW%+1)
if %KNB%==1 (if %RND%==2 (echo �� �������� & set /a WIN=%WIN%+1))
if %KNB%==2 (if %RND%==3 (echo �� �������� & set /a WIN=%WIN%+1))
if %KNB%==3 (if %RND%==1 (echo �� �������� & set /a WIN=%WIN%+1))

if %KNB%==1 (if %RND%==3 (echo �� ��������� & set /a LOSE=%LOSE%+1))
if %KNB%==2 (if %RND%==1 (echo �� ��������� & set /a LOSE=%LOSE%+1))
if %KNB%==3 (if %RND%==2 (echo �� ��������� & set /a LOSE=%LOSE%+1))

echo                                                          Cר� %WIN% : %LOSE%
echo �����:%WIN%
echo ���������:%LOSE%
echo ������: %DRAW%
echo ����� ���: %GAME%

echo:

goto 1