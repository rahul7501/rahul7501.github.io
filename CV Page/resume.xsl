<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
<xsl:template match="/resume">

<html>
  <style>

    .resume {
      float: center;
      margin-left:150px;
      background-image:url("resume-bg.jpg");
      background-repeat: no-repeat;
      max-width: 100%;
      height:auto;
      padding:50px;
      padding-top:8px;
      }

    .profilepic {
      margin:20px;
      position: absolute;
      left: 50%;
      height:200px;
      width:170px;
      border: 2px solid #444;
      }

    .container {
      margin:50px;
      padding:50px;
      font-size:14px;
      }

    .details {
      margin:60px;
      padding:60px;
      font-size:15px;
      }

    h3 {
      color:red;
      }

    hr {
      width:50%;
      float:left;
      }

    em {
      font-size:12px;
      }

  </style>

  <body>

    <div class="resume">
      <div class="container">
        <h1 class="heading" align="center"><xsl:value-of select="@heading"/></h1>
        <img class="profilepic" src="profilepic.jpg" height="200" width="200" align="right"/>

        <div class="details">
          <xsl:for-each select="details">
           <b><xsl:value-of select="name"/></b><br/>
           <xsl:value-of select="address"/><br/>
           <xsl:value-of select="phoneNo"/><br/>
           <a href="#"><xsl:value-of select="email"/></a><br/>
          </xsl:for-each>
        </div>

        <div class="additionalInfo">
          <h3>Additional Info</h3>
          <xsl:for-each select="additionalInfo">
           <b>Date Of Birth: </b><xsl:value-of select="DOB"/><br/>
           <b>Gender: </b><xsl:value-of select="gender"/><br/>
           <b>Nationality: </b><xsl:value-of select="nationality"/><br/>
           <b>Languages known: </b><xsl:for-each select="language"><xsl:value-of select="name"/>, </xsl:for-each><br/>
           <b>Interests: </b><xsl:for-each select="interest"><xsl:value-of select="name"/>, </xsl:for-each><br/>
          </xsl:for-each>
        </div><br/><hr color="#6495ED"/>

        <div class="education">
          <h3>Education</h3>
          <xsl:for-each select="education/school">
           <xsl:value-of select="type"/> (<xsl:value-of select="graduation"/>)
           <b><xsl:value-of select="name"/></b>, <xsl:value-of select="score"/>
           <br/>
          </xsl:for-each>
          <xsl:for-each select="education/university">
           <xsl:value-of select="type"/> (<xsl:value-of select="graduation"/>)
           <b><xsl:value-of select="name"/></b>, <xsl:value-of select="course"/>
           <br/>
          </xsl:for-each>
        </div><br/><hr color="#6495ED"/>

        <div class="experience">
          <h3>Experience</h3>
          <xsl:for-each select="experience/parttime">
            <em><xsl:value-of select="duration"/></em><br/>
            <b><xsl:value-of select="title"/></b>: <xsl:value-of select="location"/><br/><br/>
            <xsl:for-each select="description/ul">
              <xsl:copy-of select="li"/>
            </xsl:for-each><br/>
          </xsl:for-each>
        </div><hr color="#6495ED"/>

        <div class="ITskills">
          <h3>IT Skills</h3>
          Working knowledge of MS-
          <xsl:for-each select="ITskills/MSapp">
              <xsl:value-of select="name"/>,
          </xsl:for-each><br/>
          <b> Programming Languages known: </b>
          <xsl:for-each select="ITskills/ProgrammingLanguage">
              <xsl:value-of select="name"/>,
          </xsl:for-each>
        </div><br/><hr color="#6495ED"/>

        <div class="strengths">
          <h3>Strengths</h3>
          <xsl:for-each select="strengths/ul">
              <xsl:copy-of select="li"/>
          </xsl:for-each>
        </div><br/>

      </div>

    </div>



  </body>
</html>

</xsl:template>
</xsl:stylesheet>
